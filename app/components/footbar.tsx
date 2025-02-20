import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-orange-500 text-white text-center py-8">
            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pb-6">
                <div>
                    <h4 className="font-bold mb-2">CATEGORIES</h4>
                    <ul>
                        <li><Link href="/blogPage">Blog</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/">Home</Link></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h4 className="font-bold mb-2">FOLLOW US</h4>
                    <ul className="flex flex-col items-center sm:items-start">
      <li className="flex items-center space-x-2">
        <FaInstagram className="text-xl" />
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
      </li>
      <li className="flex items-center space-x-2">
        <FaLinkedin className="text-xl" />
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </li>
      <li className="flex items-center space-x-2">
        <FaGithub className="text-xl" />
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </li>
    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-bold mb-2">RESOURCES</h4>
                    <ul>
                        <li><Link href="/help">Help</Link></li>
                        <li><Link href="/faqs">FAQs</Link></li>
                        <li><Link href="/tutorials">Tutorials</Link></li>
                        <li><Link href="/webinars">Webinars</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold mb-2">CONTACT</h4>
                    <ul>
                        <li><Link href="/email">Email</Link></li>
                        <li><Link href="/call">Call Us</Link></li>
                        <li><Link href="/address">Address</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold mb-2">NEWSLETTER</h4>
                    <form>
                        <input
                            type="email"
                            placeholder="Subscribe for Updates"
                            className="p-2 text-gray-800 rounded-md mb-2"
                        />
                        <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-sm sm:text-base">
                © 2025 Good Brawn. All rights reserved.
            </p>
            <p className="text-xs mt-1">"Elegance in every detail, confidence in every layer."</p>
        </footer>
    );
}