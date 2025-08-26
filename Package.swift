// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPluginReceiptScanner",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorPluginReceiptScanner",
            targets: ["ReceiptScannerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "ReceiptScannerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ReceiptScannerPlugin"),
        .testTarget(
            name: "ReceiptScannerPluginTests",
            dependencies: ["ReceiptScannerPlugin"],
            path: "ios/Tests/ReceiptScannerPluginTests")
    ]
)