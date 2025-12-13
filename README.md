# KHUP.ORG

Personal website featuring blog posts, interests in mathematics, philosophy, chess, music, and more.

🌐 **Live Site**: [khup.org](https://khup.org/)

## Overview

This is a static website built with HTML5, CSS3, and vanilla JavaScript. The site features a minimalist graffiti-style homepage with elegant animations and a parchment-themed aesthetic throughout.

## Features

- 🎨 Graffiti-style animated homepage with Leonardo Da Vinci-inspired background
- 📝 Blog section for thoughts and projects
- 👤 About Me pages covering various interests (chess, mathematics, philosophy, music, soccer, movies)
- 🔒 Comprehensive security headers and protections
- 📱 Fully responsive design
- ⚡ Optimized performance with caching and compression

## Project Structure

```
khup.org/
├── index.html              # Homepage
├── css/
│   ├── main.css           # Global styles
│   ├── home.css           # Homepage-specific styles
│   ├── blog.css           # Blog styles
│   └── aboutme.css        # About page styles
├── js/
│   ├── main.js            # Global JavaScript
│   ├── blog.js            # Blog functionality
│   └── aboutme.js         # About page functionality
├── pages/
│   ├── blog.html          # Blog listing
│   ├── aboutme.html       # About Me page
│   └── aboutmepages/      # Individual interest pages
├── images/                # Image assets
├── files/                 # Media files (PDFs, audio, video)
├── scripts/               # Utility scripts (development only)
├── docs/                  # Documentation files
│   ├── security.md        # Security policy
│   ├── performance-optimization.md
│   └── image-optimization-guide.html
├── .well-known/           # Security and discovery files
│   └── security.txt       # Security contact information
├── .htaccess              # Apache security configuration
├── robots.txt             # Crawler directives
└── .gitignore             # Git ignore rules

```

## Security Features

This website implements comprehensive security measures:

### ✅ Implemented Protections

- **Content Security Policy (CSP)** - Prevents XSS and code injection
- **HTTP Security Headers** - HSTS, X-Frame-Options, X-Content-Type-Options
- **File Protection** - .htaccess rules block sensitive files
- **Directory Browsing Disabled** - No folder listing
- **Hotlinking Protection** - Media files protected from external use
- **Bot Management** - robots.txt controls crawler access
- **HTTPS Enforcement** - Automatic redirect from HTTP
- **Responsible Disclosure** - security.txt for vulnerability reporting

See [docs/security.md](docs/security.md) for complete security documentation.

## Development

### Prerequisites

- Modern web browser
- Python 3.x (for audio conversion utility)
- Web server (Apache recommended for .htaccess support)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/khup.org.git
   cd khup.org
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit http://localhost:8000
   ```

### Utility Scripts

Located in the `scripts/` directory (for development only):

- **convert_audio.py** - Converts FLAC to MP3 for browser compatibility
  ```bash
  cd scripts
  pip install pydub
  python convert_audio.py
  ```

## Deployment

### Pre-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify all links are working
- [ ] Check responsive design on mobile
- [ ] Ensure HTTPS is configured
- [ ] Deploy .htaccess file (Apache)
- [ ] Verify security headers are active
- [ ] Test CSP doesn't block resources
- [ ] Confirm robots.txt is accessible
- [ ] Check .well-known/security.txt is reachable

### GitHub Pages Deployment

1. Push to main branch
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Configure custom domain (optional)
5. Verify HTTPS is enabled

### Apache Server Deployment

1. Upload all files via FTP/SFTP
2. Ensure .htaccess is uploaded and readable
3. Verify mod_rewrite, mod_headers, and mod_deflate are enabled
4. Test security headers using [securityheaders.com](https://securityheaders.com)
5. Check SSL certificate is valid

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Google Fonts preconnect for faster loading
- Image optimization recommended
- CSS/JS minification for production
- Gzip compression via .htaccess
- Browser caching configured (1 year for static assets)

## Contributing

This is a personal website, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

For security issues, please follow the [responsible disclosure policy](docs/security.md).

## License

See [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [khup.org](https://khup.org/)
- **Security Issues**: security@khup.org (see [docs/security.md](docs/security.md))

## Acknowledgments

- Google Fonts: Bungee, Oswald, Libre Baskerville
- Bootstrap (for About pages)
- Da Vinci-inspired background art

---

**Last Updated**: December 13, 2025
 

