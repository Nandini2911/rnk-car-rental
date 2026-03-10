import BlogClient from "@/components/blog/BlogClient";
import Schema from "@/components/Schema";
import { getAllBlogs } from "@/lib/blog";

const Aboutblog=
{
  "@context": "https://schema.org",
  "@graph": [

{
 "@type": "CollectionPage",
 "@id": "https://www.rnk.com/blog/#collectionpage",
 "url": "https://www.rnk.com/blog",
 "name": "RNK Rentals Blog | Travel & Car Rental Insights",
 "description": "Expert guides, travel tips and insights about luxury car rentals, airport transfers, corporate travel and wedding transportation across India.",
 "isPartOf": {
   "@id": "https://www.rnk.com/#website"
 },
 "about": {
   "@id": "https://www.rnk.com/#organization"
 }
},

{
 "@type": "BreadcrumbList",
 "@id": "https://www.rnk.com/blog/#breadcrumb",
 "itemListElement": [
  {
   "@type": "ListItem",
   "position": 1,
   "name": "Home",
   "item": "https://www.rnk.com/"
  },
  {
   "@type": "ListItem",
   "position": 2,
   "name": "Blog",
   "item": "https://www.rnk.com/blog"
  }
 ]
},

{
 "@type": "Organization",
 "@id": "https://www.rnk.com/#organization",
 "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd",
 "alternateName": "RNK Rentals",
 "url": "https://www.rnk.com/",
 "logo": {
   "@type": "ImageObject",
   "url": "https://www.rnk.com/RNK_LOGO.jpg"
 },
 "sameAs": [
   "https://www.linkedin.com/company/rnk-rentals",
   "https://www.instagram.com/rnkrentals"
 ]
},

{
 "@type": "WebSite",
 "@id": "https://www.rnk.com/#website",
 "url": "https://www.rnk.com/",
 "name": "RNK Rentals",
 "publisher": {
   "@id": "https://www.rnk.com/#organization"
 }
}

  ]
}

export default function BlogPage() {
  const blogs = getAllBlogs(); // ✅ fs safe (server)
  <Schema data={Aboutblog} />


  return <BlogClient blogs={blogs} />;
}
