@echo off
start /b "XAMPP" "D:\xampp\xampp_start.exe
timeout /t 5 /nobreak > nul
start "" "C:\Users\ASUS\AppData\Local\Google\Chrome\Application\chrome.exe" "file:///D:/MathRush-newest/home.html"
:loop
tasklist /fi "imagename eq chrome.exe" | find /i "chrome.exe" > nul
if errorlevel 1 (
    D:\xampp\xampp_stop.exe
    exit
) else (
    tasklist /fi "imagename eq chrome.exe" /fi "windowtitle eq Math Rush" | find /i "Math Rush" > nul && goto end
    tasklist /fi "imagename eq chrome.exe" /fi "windowtitle eq MATH RUSH" | find /i "MATH RUSH" > nul && goto end
    tasklist /fi "imagename eq chrome.exe" /fi "windowtitle eq Admin Math Rush" | find /i "Admin Math Rush" > nul && goto end
    tasklist /fi "imagename eq chrome.exe" /fi "windowtitle eq Math Rush Highscore" | find /i "Math Rush Highscore" > nul && goto end
    timeout /t 1 /nobreak > nul
    goto loop
)
:end
echo "One of the specified HTML files is closed. Stopping XAMPP..."
D:\xampp\xampp_stop.exe
exit