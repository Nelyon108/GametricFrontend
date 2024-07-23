import React from 'react'

const services = [
    {
      title: 'Web Development',
      description: 'We develop responsive and high-performing websites tailored to your business needs, using the latest technologies.',
      icon: '💻', // Placeholder for an actual icon
    },
    {
        title: 'App Development',
        description: 'Developing innovative mobile applications tailored to meet your business needs and user expectations.',
        icon: '📱',
      },
      {
        title: 'Blockchain Development',
        description: 'Implementing secure and scalable blockchain solutions for various industries to enhance transparency and security.',
        icon: '🔗',
      },
      {
        title: 'Game Development',
        description: 'We create immersive and engaging games for various platforms, ensuring high-quality graphics and smooth gameplay.',
        icon: '🎮', // Placeholder for an actual icon
      },
      {
        title: 'Software Solutions',
        description: 'Providing customized software solutions to streamline your business processes and improve efficiency.',
        icon: '💻',
      },
      {
        title: 'Digital Marketing',
        description: 'Boosting your online presence with targeted digital marketing strategies to reach a larger audience.',
        icon: '📈',
      },
      {
        title: 'UI/UX Design',
        description: 'Designing intuitive and visually appealing interfaces to enhance user experience and engagement.',
        icon: '🎨',
      },
  ];
  
  const Services = () => {
    return (
      <span className="services-container">
        <h1 className="services-title">Our Services</h1>
        <span className="services-list">
          {services.map((service, index) => (
            <span key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </span>
          ))}
        </span>
      </span>
    );
  };
  
  export default Services;