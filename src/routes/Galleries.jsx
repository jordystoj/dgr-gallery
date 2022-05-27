import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";
import '../styles/Dashboard.css'
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import { v4 as uuidv4 } from 'uuid';
import Thumbnail from '../components/Thumbnail';


const Galleries = props => {
    
    let buttons = true;

    // Create some album objects
    const albums = [
        {
            photographerName: "Jordan Stojcevski",
            instagram: "@SoTallRightNow",
            faceboook: "/jordystoj",
            url: "https://uc2dbdee2e6a7821729a8c6a874d.previews.dropboxusercontent.com/p/thumb/ABg3klp3UiU_dvX0Q2BZOMqD6aWnC-_k7gOjhX8WzPusvjXFF44D-wGAtxFAEyNgfTt4xsdWkPaB3KpBremrzhbzpJ21d3OTOrOeZchTPwoo1iFHsbJGaxd18uA6doWUdK4hEF9goYFxxwd0dfaV5zadQ7pQlHtXmpp2G9jZfFjuFkgptGNiwZNq8LMZKmWn4uCGrQckxGOu-L1hWHVCiNNJzxxBOY56CkAk7UpdTiigrjP2teraDF85JNpZ0sRBKa1q8yZxqYuVRUy5g24YVoLbcLD2P6KKAEXDVYYXFBbdICG0KOGsXw_tRIuWfd31UiKtF-ucVvPVXiIg1o0bnyv527EeXuRh_znlfSNo9cQAcntf0E2a1Sfm30niGkrB9-A/p.jpeg",
            imageQty: 78,
            city: "Sydney",
            country: "Australia",
            date: "2022-05-25T12:44:44Z",
            status: "unsorted",
            albumId: uuidv4()
        },
        {
            photographerName: "Charles Leclerc",
            instagram: "@charlesleclerc",
            faceboook: "/charlesleclerc",
            url: "https://ucafb90617316642cbdb04beb50f.previews.dropboxusercontent.com/p/thumb/ABh3fWTLqvhEUL08Co5IqJaRFw701fjpb-KbHjynMQlR-0XEvR7eC3VPJXTVKvfZS4zF14bMrc9Y_wH5mShLQf_MM8rFzEOv40aYZF7yVxtOnLS8PmWfRnqZ-WoNkl7H-m6AoFU5qaFlB0WFEwm_-cA4_ms68levaIRRabyoKKED46-l4nZW793ljEANUaoVZwCCuvWqCxcEZzSClmtWJi9m6vBkrEVShHLEqCPqrHFGCCmlz_IW-nP2oCKDLy0aNPc8NJ1cmVfNwPIPo7QjcCWycqSPfCHToUEzqLlpLIwBtHso_8mDGWTkE1Brw0qt8u7oMp8OuPExXFA3RlCQzDJch4WHJT7ByEi4_BTi6PFPT44MIeDcp4xfS7n5sWXY88U/p.jpeg",
            imageQty: 34,
            city: "Monaco",
            country: "Monaco",
            date: "2022-05-24T12:44:44Z",
            status: "sorted",
            albumId: uuidv4()
        },
        {
            photographerName: "Mark Hawwa",
            instagram: "@markhawwa",
            faceboook: "/markhawwa",
            url: "https://uc50357c705fbd2f49a4d3952930.previews.dropboxusercontent.com/p/thumb/ABiYI9UU5h9tJzuBcYupmvJ5cjlK4ycjE8nv6k8HfPfVivmHQdRNSm6KdDDld999Q5WdzsoNwsG_kZf0WY4tK42pW15tY8wkVmyPzPuxFOu2iKoA1SboAE1WVEqkGVLzS02W_wcfQL0LAWuBrTIk9Mm16p3plfgqXCvshcg3DBEQBOUkLWYCmimL-v0J8iZIwzvHzu6zVPGESomzzVXpgMnoVat9h2VMl6uwYsu2wNsaK06SvbxqmCWVd2dxuMnO8KTpySw8TDlqXKv-OTtsIlM8iJYu1yuZvT6S2BDkbqK2mJdXd4AoErDQafE0Y1FpCl5cC85pZj0C5LJPuvLco6abOi6cZrP3H9YAFqBtHQB_ObuJqhEOMzoptRxZ_8RuEy0/p.jpeg",
            imageQty: 700,
            city: "Johannesburg",
            country: "South Africa",
            date: "2022-05-22T12:44:44Z",
            status: "proofed",
            albumId: uuidv4()
        },
        {
            photographer: "Max Verstappen",
            instagram: "@maxverstappen1",
            faceboook: "/maxverstappen",
            url: "https://uc2dbdee2e6a7821729a8c6a874d.previews.dropboxusercontent.com/p/thumb/ABg3klp3UiU_dvX0Q2BZOMqD6aWnC-_k7gOjhX8WzPusvjXFF44D-wGAtxFAEyNgfTt4xsdWkPaB3KpBremrzhbzpJ21d3OTOrOeZchTPwoo1iFHsbJGaxd18uA6doWUdK4hEF9goYFxxwd0dfaV5zadQ7pQlHtXmpp2G9jZfFjuFkgptGNiwZNq8LMZKmWn4uCGrQckxGOu-L1hWHVCiNNJzxxBOY56CkAk7UpdTiigrjP2teraDF85JNpZ0sRBKa1q8yZxqYuVRUy5g24YVoLbcLD2P6KKAEXDVYYXFBbdICG0KOGsXw_tRIuWfd31UiKtF-ucVvPVXiIg1o0bnyv527EeXuRh_znlfSNo9cQAcntf0E2a1Sfm30niGkrB9-A/p.jpeg",
            imageQty: 134,
            city: "Sydney",
            country: "Australia",
            date: "2022-05-21T12:44:44Z",
            status: "sorted",
            albumId: uuidv4()
        }
    ];

    let thumbnails = albums.map((album) => {
        return(
        <Col sm="4">
            <Thumbnail photo={album}/>
        </Col>)
    })

    return(
        <>

            <Row>
                <Col xs="3">
                    <SideBar />
                </Col>
                <Col xs="9" className="bg-main">
                    <Container>
                        <Row className="mt-5">
                            <Col sm="1"></Col>
                            <Col sm="10">
                                <Header title="Galleries" buttons={buttons} btnText="Add Gallery"/>
                                
                                {/* Filter Bar */}
                                <FilterBar />

                                {/* Galleries */}
                                <Row className="mt-4">
                                    {thumbnails}
                                </Row>
                            </Col>
                            <Col sm="1"></Col>
                        </Row>

                    </Container>    
                </Col>
            </Row>
        </>
    )
}

export default Galleries;