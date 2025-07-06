import React, { useState } from 'react'
import axios from 'axios'
import QRCode from "react-qr-code"

const Home = () => {
    const [file, setFile] = useState(null)
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)

    const handleUpload = async () => {
        if (!file) return alert("Please select a file")

        const formData = new FormData()
        formData.append('file', file)

        try {
            setLoading(true)
            const res = await axios.post('http://localhost:5000/api/upload', formData)
            setLink(res.data.url)
        } catch (err) {
            alert("Upload failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                📤 Decentralized File Sharing
            </h1>


            <div className="mb-4">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border px-4 py-2 text-sm w-full sm:w-auto"
                />
            </div>


            <button
                onClick={handleUpload}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Uploading...' : 'Upload File'}
            </button>

            {link && (
                <div className="mt-6 p-4 bg-white rounded shadow text-center">
                    <p className="text-green-600 mb-2">✅ File uploaded successfully!</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all text-sm sm:text-base max-w-full"
                    >
                        {link}
                    </a>


                    <div className="mt-4 flex flex-col items-center">
                        <p className="font-semibold mb-2">📱 Scan QR to download:</p>
                        <QRCode value={link} size={180} />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Home
