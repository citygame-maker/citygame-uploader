# CityGame Uploader

A secure, modern web application for uploading game configurations to the n8n workflow system. Built with Vue 3 and designed for the CityGame ecosystem.

## Features

✨ **Key Features:**
- 🔐 **Password-Protected Access** - Secure portal with authentication
- 📤 **Game Configuration Upload** - Upload Bokun template IDs and game details to n8n
- 🌍 **Country & City Management** - Select from available countries and cities, or create custom entries
- 🧪 **Testing & Production Modes** - Toggle between test and production workflows
- 📊 **Real-time Progress Tracking** - Stream upload progress with item-based tracking
- 🏙️ **City Page Creation** - Automatically create city pages for pending locations
- 🎨 **Modern UI** - Beautiful dark-themed interface with gradient accents inspired by CityGame branding
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Getting Started

### Installation

No build process required! This is a standalone HTML application.

Just Download the index.html or go to https://citygame-maker.github.io/citygame-uploader/

Password:citygame2026!

### Authentication

1. Enter the password to unlock the portal 
2. Contact the maintainer if you don't have access

### Upload Game Configuration

1. **Select Testing/Production Mode** - Toggle at the top to choose your deployment target
2. **Enter Bokun Template ID** - The unique template identifier
3. **Enter Title** - Game title placeholder
4. **Select Country** - Choose from the dropdown list
5. **Select or Create City** - Pick from existing cities or create a new one
6. **Optional Fields** - Fill in any additional details as needed
7. **Submit** - Click upload to start the process

### Monitor Progress

- Watch the real-time progress bar as items are uploaded
- View the current step being processed
- See success/error status upon completion

### Manage Pending Cities

- The sidebar shows cities pending page creation
- Click **Create Page** to automatically generate city pages
- Last checked timestamp displayed for reference

## Project Structure

```
citygame-uploader/
├── index.html          # Main application (Vue 3 + Styling)
├── README.md           # This file
└── .git/               # Git repository
```

## Technologies

- **Vue 3** - Progressive JavaScript framework (CDN version)
- **Font Awesome 6.4** - Icon library
- **Google Fonts** - Inter typography
- **CSS 3** - Modern styling with gradients, backdrop filters, and animations
- **Vanilla JavaScript** - No build tools required

## Configuration

### Backend Integration

The uploader connects to:
- **n8n Workflow** - For processing game configurations
- **CityGame API** - For country/city data and page creation

## Security

- Password-protected interface
- HTTPS recommended for production
- Secure communication with backend APIs
- No sensitive data stored in browser history

## API Integration

The application communicates with:

1. **Authentication API** - Validates portal access
2. **Countries & Cities API** - Fetches available locations
3. **Upload Workflow API** - Processes game configurations
4. **City Page API** - Creates new city pages

## Troubleshooting

### "Authentication Error"
- Verify the password is correct
- Contact the maintainer for access

### "Failed to load countries"
- Check your internet connection
- Verify the backend API is running
- Check browser console for detailed errors

### Upload Fails
- Ensure all required fields are filled
- Check the selected country and city are valid
- Review the error message in the progress modal
- Try switching between testing and production modes

## Performance

- Lightweight single-file application (~30KB HTML)
- Fast initial load with CDN dependencies
- Efficient progress streaming with real-time updates
- Optimized for slow network connections

## Contributing

To make changes:
1. Edit `index.html` directly
2. Test in your browser
3. Commit changes to git

## License

Proprietary - For internal CityGame use only

## Support

For issues or questions:
- Contact the project maintainer
- Check the browser console (F12) for error details
- Enable Testing Mode to debug workflow issues

## Version

**Current Version:** 1.0.0

---

Built with ❤️ for the CityGame community
