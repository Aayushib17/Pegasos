// src/EmailCRMDashboard.js
import React from 'react';

const EmailCRMDashboard = () => {
  // Mock data (replace with actual data from your backend or API)
  const campaignSummary = {
    totalCampaigns: 10,
    totalRecipients: 5000,
    averageOpenRate: 20,
    averageClickThroughRate: 10,
    averageConversionRate: 5,
  };

  const performanceMetrics = {
    overallMetrics: {
      openRate: 25,
      clickThroughRate: 12,
      conversionRate: 6,
    },
    deliveryMetrics: {
      deliveryRate: 95,
      bounceRate: 5,
      spamComplaints: 1,
    },
    engagementMetrics: {
      uniqueOpens: 1200,
      uniqueClicks: 600,
      forwardRate: 8,
      socialMediaShares: 15,
    },
  };

  const subscriberAnalysis = {
    listGrowth: {
      newSubscribers: 200,
      unsubscribes: 50,
      netGrowth: 150,
    },
    segmentation: {
      performanceAcrossSegments: {
        segment1: { openRate: 18, clickThroughRate: 8, conversionRate: 4 },
        segment2: { openRate: 22, clickThroughRate: 15, conversionRate: 7 },
      },
      subscriberDemographics: {
        age: {
          '18-24': 25,
          '25-34': 35,
          '35-44': 20,
          '45+': 20,
        },
        gender: {
          male: 40,
          female: 60,
        },
      },
    },
  };

  // Render the simplified Email CRM Dashboard
  return (
    <div>
      <h2>Email CRM Dashboard</h2>

      {/* Overview Section */}
      <div>
        <h3>Campaign Summary</h3>
        <p>Total Campaigns Sent: {campaignSummary.totalCampaigns}</p>
        <p>Total Recipients: {campaignSummary.totalRecipients}</p>
        <p>Average Open Rate: {campaignSummary.averageOpenRate}%</p>
        <p>Average Click-Through Rate: {campaignSummary.averageClickThroughRate}%</p>
        <p>Average Conversion Rate: {campaignSummary.averageConversionRate}%</p>
      </div>

      {/* Performance Metrics */}
      <div>
        <h3>Performance Metrics</h3>
        <p>Overall Metrics:</p>
        <p>Open Rate: {performanceMetrics.overallMetrics.openRate}%</p>
        <p>Click-Through Rate: {performanceMetrics.overallMetrics.clickThroughRate}%</p>
        <p>Conversion Rate: {performanceMetrics.overallMetrics.conversionRate}%</p>

        <p>Delivery Metrics:</p>
        <p>Delivery Rate: {performanceMetrics.deliveryMetrics.deliveryRate}%</p>
        <p>Bounce Rate: {performanceMetrics.deliveryMetrics.bounceRate}%</p>
        <p>Spam Complaints: {performanceMetrics.deliveryMetrics.spamComplaints}</p>

        <p>Engagement Metrics:</p>
        <p>Unique Opens: {performanceMetrics.engagementMetrics.uniqueOpens}</p>
        <p>Unique Clicks: {performanceMetrics.engagementMetrics.uniqueClicks}</p>
        <p>Forward Rate: {performanceMetrics.engagementMetrics.forwardRate}%</p>
        <p>Social Media Shares: {performanceMetrics.engagementMetrics.socialMediaShares}</p>
      </div>

      {/* Subscriber Analysis */}
      <div>
        <h3>Subscriber Analysis</h3>
        <p>List Growth:</p>
        <p>New Subscribers: {subscriberAnalysis.listGrowth.newSubscribers}</p>
        <p>Unsubscribes: {subscriberAnalysis.listGrowth.unsubscribes}</p>
        <p>Net Growth: {subscriberAnalysis.listGrowth.netGrowth}</p>

        <p>Segmentation:</p>
        <p>Performance Across Different Segments:</p>
        {Object.entries(subscriberAnalysis.segmentation.performanceAcrossSegments).map(([segment, metrics]) => (
          <div key={segment}>
            <p>Segment: {segment}</p>
            <p>Open Rate: {metrics.openRate}%</p>
            <p>Click-Through Rate: {metrics.clickThroughRate}%</p>
            <p>Conversion Rate: {metrics.conversionRate}%</p>
          </div>
        ))}

        <p>Subscriber Demographics:</p>
        <p>Age:</p>
        {Object.entries(subscriberAnalysis.segmentation.subscriberDemographics.age).map(([ageGroup, percentage]) => (
          <p key={ageGroup}>{ageGroup}: {percentage}%</p>
        ))}
        <p>Gender:</p>
        {Object.entries(subscriberAnalysis.segmentation.subscriberDemographics.gender).map(([gender, percentage]) => (
          <p key={gender}>{gender}: {percentage}%</p>
        ))}
      </div>
    </div>
  );
};

export default EmailCRMDashboard;
