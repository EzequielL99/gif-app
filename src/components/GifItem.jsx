import { motion } from "framer-motion";

export default function GifItem({ url, title, index = 0 }) {
  return (
    <li>
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
      >
        <div>
          <img src={url} alt={title} className="w-full h-64 object-cover" />
          <p className="p-2 text-sm text-gray-300">
            {title || "GIF sin titulo"}
          </p>
        </div>
      </motion.div>
    </li>
  );
}
