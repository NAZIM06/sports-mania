import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlagIcon from '@material-ui/icons/Flag';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import WcIcon from '@material-ui/icons/Wc';
import facebook from '../../Icon/Facebook.png'
import twitter from '../../Icon/Twitter.png'
import youtube from '../../Icon/YouTube.png'

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setDetails(data.leagues))
    }, [idLeague])
    const [desctDetails] = details;
    console.log(desctDetails);
    return (
        <div>
            {/* <Banner img={desctDetails}></Banner> */}
            {details.map(detail => {
                return <div className='banner-main'>
                    <div className='banner-image'>
                        <img className='banner-logo' src={detail.strBadge} alt="" />
                    </div>
                    <div className='banner-container'>
                        <div className="banner-league">
                            <div className='banner-detail'>
                                <h2>{detail.strLeague}</h2>
                                <p><LocationOnIcon className='banner-icon'></LocationOnIcon>Founded : {detail.dateFirstEvent}</p>
                                <p><FlagIcon className='banner-icon'></FlagIcon>Country : {detail.strCountry}</p>
                                <p><SportsSoccerIcon className='banner-icon'></SportsSoccerIcon>Sport Type : {detail.strSport}</p>
                                <p><WcIcon className='banner-icon'></WcIcon>Gender : {detail.strGender}</p>
                            </div>
                            <div className='banner-img'>
                                {/* {(detail.strGender === 'Male') ? <img src={bnnerMaleImage} alt="" /> : <img src={bnnerFemaleImage} alt="" />} */}

                                {
                                    detail.strGender === 'Female' ? <img src={detail.strFanart1} alt="" /> : <img src={detail.strFanart1} alt="" />
                                }

                            </div>
                        </div>
                        <div>

                            <p>{detail.strDescriptionEN}</p>

                        </div>
                        <div className='social-icon'>
                            <a href={detail.strFacebook}>
                                <img src={facebook} alt="" />
                            </a>
                            <a href={detail.strTwitter}>
                                <img src={twitter} alt="" />
                            </a>
                            <a href={detail.strYoutube}>
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default LeagueDetail;