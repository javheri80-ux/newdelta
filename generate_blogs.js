const fs = require('fs');
const path = require('path');

const keywords = [
  "1BHK flats in Thane",
  "2BHK flats in Thane",
  "1BHK for sale in Thane",
  "2BHK for sale in Thane",
  "New projects in Thane",
  "Affordable flats in Thane",
  "Ready to move flats in Thane",
  "Under construction flats in Thane",
  "Budget homes in Thane",
  "Residential projects in Thane"
];

const blogDir = path.join(__dirname, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir);
}

function createSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const template = (title, slug) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Delta Greenville Thane West</title>
    
    <!-- SEO Optimization specific to ${title} -->
    <meta name="description" content="Looking for ${title}? Discover the best premium residences at Delta Greenville in Thane West. Explore top-class amenities, superior architecture, and unmatched connectivity.">
    <meta name="keywords" content="${title}, Delta Greenville, flats in Thane West, luxury real estate Thane">
    <link rel="canonical" href="https://www.deltathane.online/blog/${slug}.html">
    <meta property="og:title" content="${title} | Delta Greenville">
    <meta property="og:description" content="Detailed guide and availability for ${title} at Delta Greenville, Thane West. Exclusive local insights.">
    <meta property="og:url" content="https://www.deltathane.online/blog/${slug}.html">
    <meta property="og:type" content="article">
    
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        header { background: #0a4d2e; color: #fff; padding: 20px; text-align: center; border-bottom: 4px solid #c4a75e;}
        header a { color: #fff; text-decoration: none; font-size: 0.9em; text-transform: uppercase;}
        .container { max-width: 800px; margin: 40px auto; padding: 0 20px; }
        h1 { color: #0a4d2e; font-size: 2.2em; border-bottom: 2px solid #e5d8b0; padding-bottom: 10px;}
        h2 { color: #27ae60; margin-top: 30px;}
        .content { margin-top: 20px; font-size: 1.1em;}
        .back-link { display: inline-block; margin-top: 30px; text-decoration: none; color: #0a4d2e; font-weight: bold; background: #e5d8b0; padding: 10px 20px; border-radius: 4px;}
        .cta-box { background: #d4efdf; border: 1px solid #27ae60; padding: 20px; margin: 30px 0; border-radius: 8px; text-align: center;}
        .cta-btn { background: #0a4d2e; color: white; padding: 12px 25px; text-decoration: none; display: inline-block; margin-top: 15px; font-weight: bold; border-radius: 4px;}
    </style>
</head>
<body>
    <header>
        <h2 style="margin: 0 0 10px 0;">Delta Greenville Thane West</h2>
        <a href="../index.html">← Back to Main Website</a>
    </header>
    <div class="container">
        <article>
            <h1>${title}</h1>
            <div class="content">
                <p>Welcome to our comprehensive overview focusing on <strong>${title}</strong>. Thane has rapidly transformed into one of the most sought-after residential destinations, combining a rich green environment with spectacular urban infrastructure. If you are specifically searching for ${title.toLowerCase()}, then understanding the local real estate dynamics and choosing the right developer is crucial.</p>
                
                <h2>Why is Thane West Ideal for ${title}?</h2>
                <p>Investing here means unparalleled access to top schools, massive retail hubs like Viviana Mall, and advanced healthcare like Jupiter Hospital. Those looking for ${title.toLowerCase()} will find that Delta Greenville offers an exceptional balance of price, location, and luxury lifestyle. Our carefully curated living spaces are designed entirely around your needs.</p>

                <h2>What Makes Delta Greenville Stand Out?</h2>
                <p>Finding ${title.toLowerCase()} that also guarantees high-quality construction and timely delivery can be challenging. Delta Greenville bridges this gap by offering:</p>
                <ul>
                    <li><strong>Strategic Location:</strong> Excellent connectivity to the Eastern Express Highway and upcoming metro lines.</li>
                    <li><strong>World-Class Amenities:</strong> Infinity pool, state-of-the-art gymnasium, grand banquet, and dedicated kids' play areas.</li>
                    <li><strong>Spacious Design:</strong> Maximum carpet utility, ensuring your home feels vast and welcoming.</li>
                </ul>
                
                <div class="cta-box">
                    <h3>Interested in ${title}?</h3>
                    <p>Don't miss out on our exclusive launch offers. Our property experts are ready to assist you with floor plans, pricing details, and virtual tours.</p>
                    <a href="../index.html#contact" class="cta-btn">Enquire Now & Get Details</a>
                </div>
            </div>
        </article>
        <a href="index.html" class="back-link">&larr; Return to All Articles</a>
    </div>
</body>
</html>`;

let indexLinks = "";

keywords.forEach(keyword => {
    const slug = createSlug(keyword);
    const html = template(keyword, slug);
    fs.writeFileSync(path.join(blogDir, `${slug}.html`), html);
    indexLinks += `<li><a href="${slug}.html" style="color: #0a4d2e; text-decoration: none; font-size: 1.15rem; font-weight: 500; display: block;">${keyword} <span style="float:right; color:#888;">&rarr;</span></a></li>\n`;
});

const indexTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog & Insights | Delta Greenville Thane West</title>
    <meta name="description" content="Read our latest articles, guides, and insights on the real estate market in Thane West. Find the perfect home with our expert advice.">
    <link rel="canonical" href="https://www.deltathane.online/blog/index.html">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9;}
        header { background: #0a4d2e; color: #fff; padding: 25px; text-align: center; border-bottom: 4px solid #c4a75e;}
        header a { color: #fff; text-decoration: none; font-size: 0.9em; text-transform: uppercase;}
        .container { max-width: 800px; margin: 40px auto; padding: 30px; background: #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);}
        h1 { color: #0a4d2e; border-bottom: 2px solid #e5d8b0; padding-bottom: 10px; margin-bottom: 20px;}
        ul { list-style: none; padding: 0; }
        li { padding: 15px 10px; border-bottom: 1px solid #eee; transition: 0.3s;}
        li:hover { background-color: #f0f7f4; padding-left: 20px;}
    </style>
</head>
<body>
    <header>
        <h2 style="margin: 0 0 10px 0;">Delta Greenville Insights</h2>
        <a href="../index.html">← Back to Main Website</a>
    </header>
    <div class="container">
        <h1>Latest Articles & Guides</h1>
        <p style="color: #666; margin-bottom: 25px;">Explore our detailed coverage of the Thane real estate market. Whether you are an investor or looking for your dream home, our guides are designed to help you make an informed decision.</p>
        <ul>
            ${indexLinks}
        </ul>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(blogDir, 'index.html'), indexTemplate);

console.log("Blog section created successfully!");
