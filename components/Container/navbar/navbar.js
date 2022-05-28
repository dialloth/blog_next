    import React from 'react';
    import Link from 'next/link';
    import styles from './navbar.module.css'

    export default function navbar() {
    return (
        <div className={styles.navbar}>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid justify-content-center">
            <Link href="/">
                <a className="navbar-brand mx-4">Accueil</a>
            </Link>
            <Link href="/blog">
                <a className="navbar-brand mx-4">Blog</a>
            </Link>
            <Link href="/utilisateur">
                <a className="navbar-brand mx-4">Membres</a>
            </Link>
            </div>
        </nav>
        </div>
    );
    }
