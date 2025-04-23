import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Instagram, Github } from 'lucide-react'; 

interface Product {
  name: string;
  description: string;
  link?: string; 
  image?: string; 
}

const products: Product[] = [
  { name: 'Tekir', description: 'Your intelligent and fast search engine.', link: 'https://tekir.co', image: '/banners/tekir.png' },
  { name: 'Karakulak', description: 'The private way to talk with AI, free for all.', link: 'https://chat.tekir.co', image: '/banners/karakulak.png' }, 
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-0 pt-8 pb-0 font-sans flex flex-col min-h-screen">
      <div className="flex-grow">
        <header className="max-w-6xl mx-auto px-4 sm:px-0 flex justify-center items-center mb-12 pb-4 border-b" style={{ marginTop: '-12px' }}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="computebaker Logo"
              width={234}
              height={35}
              className="h-8 w-auto" 
            />
          </Link>
          <Image
            src="/tr.svg"
            alt="Turkey Flag"
            width={30}
            height={32}
            className="ml-2"
            style={{ position: 'relative', top: '-1px' }}
          />
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-0 flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight"> 
            We are <em className="font-italic">building</em>
            <em className="font-italic"> the web</em> <br/>
            as an open place.
          </h1>
          <h3 className="text-2xl md:text-2xl font-serif mb-6 leading-tight text-gray-600">
            And we are making it together
            <em className="font-italic"> with everyone</em>, for anyone.
          </h3>
        </main>

        <section className="max-w-6xl mx-auto px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-gradient-to-br from-gray-50 via-white to-gray-200 border-2 border-gray-800 rounded-[10px] flex flex-col items-start transition-shadow duration-200 overflow-hidden"
              style={{
                borderRadius: '10px',
                border: '2px solid #222',
              }}
            >
              {product.image && (
                <div className="w-full relative"> 
                  <Image
                    src={product.image}
                    alt={`${product.name} banner`}
                    width={400} 
                    height={150} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              )}
              <div className="p-8 w-full"> 
                <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight font-mono border-b-2 border-dotted border-gray-400 pb-1 flex items-center">
                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-700 flex items-center"
                      style={{ textDecoration: 'none' }}
                    >
                      {product.name}
                      <ArrowUpRight className="ml-1 h-5 w-5" />
                    </a>
                  ) : (
                    product.name
                  )}
                </h2>
                <p className="text-gray-800 text-base leading-relaxed font-mono">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-0 mt-16 text-center">
          <h2 className="text-4xl font-serif mb-4">Building for anyone...</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-mono">
            We believe the web should be accessible and easy to use for all. Our products are designed with modern principles, focusing on intuitive interfaces and inclusive experiences that is free for everyone.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-0 mt-16 text-center">
          <h2 className="text-4xl font-serif mb-4">...with everyone</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-mono">
            Our team at <b>computebaker</b> is dedicated to creating a collaborative environment. We invite developers, designers, and users to join us in shaping the future of the web. Together, we can build tools that empower everyone.
          </p>
        </section>

      </div>

      <footer className="max-w-6xl mx-auto w-full px-4 sm:px-0 mt-16 pt-6 pb-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
            <div className="flex items-left">
            <Image
              src="/logo.svg"
              alt="ComputeBaker Logo"
              width={156}
              height={23}
              className="h-6 w-auto"
            />
            <Image
              src="/tr.svg"
              alt="Turkey Flag"
              width={30}
              height={32}
              className="ml-2"
              style={{ position: 'relative', top: '-1px' }}
            />
            </div>

          <div className="flex space-x-4">
            <a href="https://instagram.com/tekirsearch" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://github.com/tekircik" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
