
const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "customer@nike.com", link: "mailto:customer@nike.com" },
          { name: "+92554862354", link: "tel:+92554862354" },
      ],
  },
];

export const socialMedia = [
  { src: "https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png", alt: "facebook logo" },
  { src: "https://cdn-icons-png.flaticon.com/512/733/733635.png", alt: "twitter logo" },
  { src: "https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-900x900.png", alt: "instagram logo" },
];

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col mx-6 p-6 grid-col-1'>
        <div className='flex flex-col items-start'>
          <a href='/'>
           Logo
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-8 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer'>
          &#169;
          <p>Copyright. All rights reserved.</p>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
