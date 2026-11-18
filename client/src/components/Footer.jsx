export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CVHub Africa. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with LOVE in South Africa.
        </p>
      </div>
    </footer>
  );
}
