import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css'; // import your CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from '@docusaurus/Link';

function Profile() {
    return (
        <Layout title="Profile">
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <img src="https://media.licdn.com/dms/image/D5603AQHtjkiNd3t1ew/profile-displayphoto-shrink_800_800/0/1674207190793?e=1696464000&v=beta&t=XaMyww52mdDr8qf_skF-FE_4sWxowfejzynVyFKY4Rk" alt="Your Name" />
                    </div>
                    <h1 className={styles.title}>M. Ilham Surya Pratama</h1>
                    <p className={styles.subtitle}>Backend Engineer</p>
                </div>
                <div className={styles.content}>
                    {/*<p>About me:</p>*/}
                    {/*<p>Your Biography...</p>*/}

                    <h3>Contact me</h3>
                    <div className={styles.links}>
                        <a href="https://www.instagram.com/milhamsuryapratama/">
                            <FontAwesomeIcon icon={faInstagram} size='lg' /> Instagram
                        </a>
                        <a href="https://www.linkedin.com/in/milhamsuryapratama/">
                            <FontAwesomeIcon icon={faLinkedin} size='lg' /> LinkedIn
                        </a>
                        <a href="https://github.com/milhamsuryapratama">
                            <FontAwesomeIcon icon={faGithub} size='lg' /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;