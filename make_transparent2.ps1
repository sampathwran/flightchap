Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("C:\src\flightchap-web\public\logo_purple.jpg")
$bmp = New-Object System.Drawing.Bitmap($img)
$img.Dispose()

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        # If the pixel is mostly white/bright (R, G, B > 150), keep it white. Else make it transparent.
        if ($pixel.R -ge 150 -and $pixel.G -ge 150 -and $pixel.B -ge 150) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::White)
        } else {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Save("C:\src\flightchap-web\public\logo_final.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
