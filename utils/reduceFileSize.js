import sharp from "sharp";

export default function reduceFileSize(filePath, outputPath) {
    return sharp(filePath)
        .resize({ width: 1000, withoutEnlargement: true })
        .toFormat('png')
        .png({ quality: 85 })
        .toFile(outputPath)
}