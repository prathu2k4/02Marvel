@echo off
title Git Commit & Push Helper

REM ==============================
REM Ensure we're in the repo folder
REM ==============================
echo.
echo Git Commit & Push Tool
echo ======================
echo.

REM Show options
echo Select an option:
echo.
echo 1. Commit WITHOUT message
echo 2. Commit WITH message
echo.
set /p choice=Enter 1 or 2: 

IF "%choice%"=="1" GOTO NOMSG
IF "%choice%"=="2" GOTO WITHMSG

echo.
echo Invalid selection. Exiting...
pause
exit /b


:NOMSG
echo.
echo Adding all changes...
git add .

echo.
echo Committing with default message...
git commit -m "Auto commit"

echo.
echo Pushing to main...
git push origin main

echo.
echo Done!
pause
exit /b


:WITHMSG
echo.
set /p msg=Enter commit message: 

echo.
echo Adding all changes...
git add .

echo.
echo Committing with your message...
git commit -m "%msg%"

echo.
echo Pushing to main...
git push origin main

echo.
echo Done!
pause
exit /b
