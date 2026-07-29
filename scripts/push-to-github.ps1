# Completes GitHub publish for HackaToB_v01 after Git + gh are installed.
# Usage (from repo root):
#   powershell -ExecutionPolicy Bypass -File scripts/push-to-github.ps1

$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
Set-Location (Join-Path $PSScriptRoot "..")

gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "Not logged in. Complete the browser flow when prompted..."
  gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key
  gh auth status
  if ($LASTEXITCODE -ne 0) { throw "GitHub auth failed." }
}

$repoName = "hackatob-2026-website"
$desc = "HackaToB 2026 — micrositio oficial (Technology on Business)"

gh repo view $repoName 2>$null | Out-Null
if ($LASTEXITCODE -eq 0) {
  Write-Host "Repo exists. Pushing main..."
  $url = gh repo view $repoName --json url -q .url
  git remote remove origin 2>$null
  git remote add origin ($url.TrimEnd("/") + ".git")
  git push -u origin main
} else {
  Write-Host "Creating private repo $repoName ..."
  gh repo create $repoName --private --source=. --remote=origin --push --description $desc
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Name taken. Trying hackatob-website-2026 ..."
    gh repo create hackatob-website-2026 --private --source=. --remote=origin --push --description $desc
  }
}

Write-Host "Commit:" (git rev-parse HEAD)
gh repo view --json url -q .url
Write-Host "Done."
