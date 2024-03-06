// src/components/Overview.js
import React, { useState, useEffect } from 'react';

const Overview = () => {
  const [campaignSummary, setCampaignSummary] = useState({
    totalCampaignsSent: 0,
    totalRecipients: 0,
    averageOpenRate: 0,
    averageClickThroughRate: 0,
    averageConversionRate: 0,
  });

  useEffect(() => {
    // Simulate fetching data from a backend API (replace with your actual API endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the fetched data structure matches our campaign summary structure
        setCampaignSummary(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      <h2>Overview</h2>
      <div>
        <h3>Campaign Summary</h3>
        <p>Total Campaigns Sent: {campaignSummary.totalCampaignsSent}</p>
        <p>Total Recipients: {campaignSummary.totalRecipients}</p>
        <p>Average Open Rate: {campaignSummary.averageOpenRate}%</p>
        <p>Average Click-Through Rate: {campaignSummary.averageClickThroughRate}%</p>
        <p>Average Conversion Rate: {campaignSummary.averageConversionRate}%</p>
       
      </div>
    </div>
  );
};

export default Overview;
