'use client';

import 'bootstrap/dist/css/bootstrap.css';
import styles from './header.module.css'

import React, { useState } from 'react';
import { 
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap"
import Link from 'next/link';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar className={styles.navbar} fixed="top" expand="sm" container="fluid">
            <NavbarBrand href="/" className={styles.swtext}>
                SWAPI Visualizer
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav 
                        className="me-auto" 
                        navbar
                    >
                        <NavItem className={styles.navitem}>
                            <Link href="/people" className={styles.swtext}>
                                People
                            </Link>
                        </NavItem>
                        <NavItem className={styles.navitem}>
                            <Link href="/planets" className={styles.swtext}>
                                Planets
                            </Link>
                        </NavItem>
                        <NavItem className={styles.navitem}>
                            <Link href="/films" className={styles.swtext}>
                                Films
                            </Link>
                        </NavItem>
                        <NavItem className={styles.navitem}>
                            <Link href="/species" className={styles.swtext}>
                                Species
                            </Link>
                        </NavItem>
                        <NavItem className={styles.navitem}>
                            <Link href="/vehicles" className={styles.swtext}>
                                Vehicles
                            </Link>
                        </NavItem>
                        <NavItem className={styles.navitem}>
                            <Link href="/starships" className={styles.swtext}>
                                Starships
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    )
}