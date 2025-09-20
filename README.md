
# Solana Wallet Provider

A plug-and-play React context provider for integrating Solana wallets into your dApp with ease. Built using `@solana/wallet-adapter` packages.

## 🚀 Features

- Easy integration with multiple Solana wallets (Phantom, Solflare, Backpack, etc.)
- Automatically manages wallet connections and disconnections
- Provides wallet context throughout your app
- Supports both mainnet and devnet
- Real-time balance updates
- Airdrop functionality for testing on devnet

## 🛠️ Installation

```bash
npm install @solana/wallet-adapter-react \
            @solana/wallet-adapter-wallets \
            @solana/wallet-adapter-react-ui \
            @solana/web3.js
```

## 🏃‍♂️ Quick Start

1. **Clone and install dependencies:**
```bash
git clone https://github.com/devaniketh/solana-wallet-provider.git
cd solana-wallet-provider
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── AppWalletProvider.tsx    # Main wallet context provider
│   ├── address/
│   │   └── page.tsx                 # Wallet address and balance page
│   ├── layout.tsx                   # Root layout with wallet provider
│   ├── page.tsx                     # Home page with connect button
│   └── globals.css                  # Global styles
```

## 🔧 Components

### AppWalletProvider
The main wallet context provider that wraps your entire application:

```tsx
import AppWalletProvider from "./components/AppWalletProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
```

### Features Included

1. **Wallet Connection** (`/`) - Simple wallet connection interface
2. **Address Display** (`/address`) - Shows connected wallet details:
   - Public key
   - SOL balance (auto-updates every 10 seconds)
   - Airdrop functionality for devnet testing

## 🌐 Network Configuration

Currently configured for **Solana Devnet**. To change networks, modify the `network` variable in `AppWalletProvider.tsx`:

```tsx
const network = WalletAdapterNetwork.Devnet; // or .Mainnet
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 Dependencies

- **Next.js 15** - React framework
- **@solana/wallet-adapter-react** - Core wallet adapter
- **@solana/wallet-adapter-react-ui** - UI components
- **@solana/web3.js** - Solana JavaScript SDK
- **Tailwind CSS** - Styling

## 🎯 Use Cases

- **dApp Template** - Use as a starting point for Solana dApps
- **Wallet Integration Reference** - Learn how to integrate Solana wallets
- **Testing Environment** - Test wallet connections and transactions
- **Educational Tool** - Understand Solana wallet adapter patterns

## 🚦 Getting Started with Development

1. **Connect a Wallet**: Use the "Select Wallet" button on the home page
2. **View Address Info**: Navigate to `/address` to see wallet details
3. **Request Airdrop**: Click "Get Airdrop" to receive test SOL on devnet
4. **Check Balance**: Balance updates automatically every 10 seconds

## 📝 Notes

- This demo uses **Solana Devnet** for safe testing
- Airdrop functionality only works on devnet
- Install a Solana wallet (like Phantom) for full functionality
- The project is set up with TypeScript and ESLint for code quality

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
