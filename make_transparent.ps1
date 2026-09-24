Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("C:\src\flightchap-web\public\logo.jpg")
$bmp = New-Object System.Drawing.Bitmap($img)
$img.Dispose()

# Make white (and near white) transparent
$white = [System.Drawing.Color]::White
$tolerance = 30

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -ge (255 - $tolerance) -and $pixel.G -ge (255 - $tolerance) -and $pixel.B -ge (255 - $tolerance)) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Save("C:\src\flightchap-web\public\logo_transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
