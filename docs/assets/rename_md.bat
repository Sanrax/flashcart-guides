@echo off
setlocal

echo Choose output extension:
echo 1. .gen
echo 2. .bin
set /p choice=Enter 1 or 2: 

if "%choice%"=="1" set "newext=gen"
if "%choice%"=="2" set "newext=bin"

if not defined newext (
    echo Invalid choice.
    pause
    exit /b 1
)

for %%F in (*.md) do (
    ren "%%F" "%%~nF.%newext%"
)

echo Done.
pause