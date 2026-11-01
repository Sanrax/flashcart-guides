@echo off
setlocal

echo Choose output extension:
echo 1. .gen
echo 2. .bin
echo 3. .smd
set /p choice=Enter 1, 2, or 3: 

if "%choice%"=="1" set "newext=gen"
if "%choice%"=="2" set "newext=bin"
if "%choice%"=="3" set "newext=smd"

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