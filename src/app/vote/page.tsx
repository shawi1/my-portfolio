'use client';

import { title } from 'process';
import { useEffect, useState } from 'react';

export default function VotePage() {
    const [techOptions] = useState(['React', 'Node.js', 'Python', 'TypeScript', 'C++']);
    const [selectedTech, setSelectedTech] = useState('');
    const [votes, setVotes] = useState<any[]>([]);

    // Fetch vote data from backend
    const fetchVotes = async () => {
        const res = await fetch('/api/votes');
        const data = await res.json();
        setVotes(data);
    };

    useEffect(() => {
        fetchVotes();
    }, []);

    const handleVote = async () => {
        if (!selectedTech) return;
        await fetch('/api/votes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tech: selectedTech }),
        });
        setSelectedTech('');
        fetchVotes(); // Refresh vote count
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Vote for Your Favorite Tech Stack</h1>

            <div className="flex gap-4 mb-6">
                <select
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                    className="bg-[#1E1E1E] text-white border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select a tech</option>
                    {techOptions.map((tech) => (
                        <option key={tech} value={tech}>
                            {tech}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleVote}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Vote
                </button>
            </div>

            <h2 className="text-xl font-semibold mb-2">Current Results:</h2>
            <ul className="space-y-2">
                {votes.map((v: any) => (
                    <li key={v.tech} className="border p-2 rounded shadow">
                        {v.tech}: {v.votes}
                    </li>
                ))}
            </ul>
        </div>
    );
}