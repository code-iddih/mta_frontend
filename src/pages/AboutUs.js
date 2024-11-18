import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <main>
                <section className="about-us">
                    <h1>About Us</h1>
                    <h2>Company Background</h2>
                    <p>
                        Baller, an indigenous African company, was founded in 1970. It was set up as a new remittance venture to enable migrants to send money to family and friends back in the countries of East Africa. Baller has grown to be the largest African money transfer business and our services can be accessed across 150 countries worldwide, 51 of which are in Africa. It remains a business committed to its original values of trust, reliability, integrity, and customer focus.
                    </p>
                    <p>
                        In addition to serving individual customers, Baller offers money transfer and banking services to businesses and international organizations, including the United Nations, World Bank, Oxfam, and Save the Children. They rely on Baller to provide payment services to their staff, contractors, government institutions, and partner NGOs. The United Nations describes Baller’s services as ‘the only safe and efficient option to transfer funds to projects’.
                    </p>

                    <h2>The Importance of Money Transfer Services</h2>
                    <p>
                        Many international organizations have recognized the crucial role of remittances, both during humanitarian crises and for development. For example, organizations including the United Nations, World Bank, Oxfam, and others comment regularly on the importance of money transfer services. They describe them as a lifeline for millions of people, especially those living in rural communities where other financial services, such as banks, do not exist. Baller is very strong in rural communities. As well as enabling Africa’s very poorest people to survive, Baller allows others to invest and create jobs, contributing to growth on the continent.
                    </p>
                    <p>
                        International organizations have also recognized that companies like Baller are a much safer and more desirable option compared with informal channels, which are not subject to checks on where the money comes from and where it goes.
                    </p>
                    <p>
                        The existence of companies like Baller is viewed as crucial to sustaining a healthy atmosphere of competition. This helps keep prices down and the standard of service high. Baller has some of the most competitive rates available.
                    </p>

                    <h2>Commitment to Communities</h2>
                    <p>
                        Baller has had a long-standing tradition of contributing to the communities in which it operates. It dedicates 5% of its profits to humanitarian and community regeneration projects. It supports and has provided funds amounting to millions of dollars to projects such as hospitals, schools, and community facilities.
                    </p>

                    <h2>Compliance</h2>
                    <p>
                        Baller has comprehensive and robust compliance, and anti-money laundering and counter-terrorism finance programs used throughout its global network ensuring full compliance with all relevant regulations. Its network and associates are fully licensed, regulated, and supervised by the relevant authorities in every jurisdiction worldwide in which it operates. These include most countries in Africa, Europe, the USA, Canada, Australia, and the Middle East.
                    </p>
                    <p>
                        In Kenya specifically, Baller was the very first money transfer business to receive a license and has continually complied with all relevant laws and regulatory requirements.
                    </p>

                    <h3>Kenya</h3>
                    <p>
                        In Kenya, Baller has implemented policies and procedures that ensure a full suite of checks and controls are completed on senders and receivers of remittances. For two weeks in February 2015, the Central Bank of Kenya Supervisory Department carried out an in-depth audit of Baller’s business and found that Baller was fully compliant with all relevant policies and procedures. It was the first money transfer company to be audited by the Central Bank.
                    </p>
                    <p>
                        Baller contributes to the Kenyan economy by employing Kenyans, providing hard currency, and paying substantial taxes and other contributions. Baller values its civic obligations in Kenya. It was recently one of the companies which sponsored the Kenya Diaspora Forum, graced by his Excellency the President of the Republic of Kenya, where it played a pivotal role as a gold sponsor.
                    </p>

                    <h2>Get Started with Baller Today</h2>
                    <p>Create your account quickly and start transferring money internationally with confidence and ease.</p>

                    {/* Centered Get Started Button */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <a
                            href="/register"
                            className="cta-button"
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#28a745', // Green color
                                color: 'white',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}
                        >
                            Get Started
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Baller. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;