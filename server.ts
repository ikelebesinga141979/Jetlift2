import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory enquiry store
interface EnquiryRecord {
  id: string;
  referenceCode: string;
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  preferredContact: string;
  serviceRequired: string;
  propertyType: string;
  propertyLocation: string;
  elevatorBrand?: string;
  problemDescription: string;
  preferredDate?: string;
  agreeToPrivacy: boolean;
  createdAt: string;
}

const enquiries: EnquiryRecord[] = [];

// API Route: Submit new elevator service enquiry
app.post('/api/enquiries', (req, res) => {
  const {
    fullName,
    phone,
    serviceRequired,
    propertyType,
    propertyLocation,
    problemDescription,
  } = req.body;

  if (!fullName || !phone || !propertyLocation || !problemDescription) {
    return res.status(400).json({
      error: 'Missing required fields: fullName, phone, propertyLocation, and problemDescription are required.',
    });
  }

  const referenceCode = 'JET-' + Math.floor(100000 + Math.random() * 900000);
  const record: EnquiryRecord = {
    id: referenceCode,
    referenceCode,
    fullName,
    companyName: req.body.companyName || '',
    phone,
    email: req.body.email || '',
    preferredContact: req.body.preferredContact || 'Phone',
    serviceRequired: serviceRequired || 'General Elevator Inquiry',
    propertyType: propertyType || 'Commercial',
    propertyLocation,
    elevatorBrand: req.body.elevatorBrand || '',
    problemDescription,
    preferredDate: req.body.preferredDate || '',
    agreeToPrivacy: Boolean(req.body.agreeToPrivacy),
    createdAt: new Date().toISOString(),
  };

  enquiries.push(record);
  console.log(`[Jetlift Standard Elevators] Received new enquiry ${referenceCode} from ${fullName} (${phone}) - ${serviceRequired} in ${propertyLocation}`);

  return res.status(201).json({
    success: true,
    referenceCode,
    message: 'Enquiry successfully logged. Our technical team will reach out shortly.',
  });
});

// API Route: Health & inquiries list
app.get('/api/enquiries', (_req, res) => {
  return res.json({
    total: enquiries.length,
    enquiries: enquiries.slice(-20), // return last 20
  });
});

// Mount Vite or serve static assets
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jetlift Standard Elevators server running on port ${PORT}`);
  });
}

startServer();
