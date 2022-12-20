import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mb-6 mt-20 lg:mt-[8rem]">
      <Link
        href="https://github.com/ismailsevgi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center gap-4">
          <p className="text-sm text-gray-600">powered by</p>
          <Image
            src="/assets/skills/nextjs.png"
            alt="logo"
            width={24}
            height={24}
          />
          <p className="text-sm text-gray-600">ismailsevgi</p>
        </div>
      </Link>
    </footer>
  )
}

export default Footer
