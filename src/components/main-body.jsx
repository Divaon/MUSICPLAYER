




import { useContext, useEffect, useState, useRef } from 'react';
import '../App.css';

import { userDataContext } from '../context/usercontext';
import prev from '../images/previous.png';
import next from '../images/fast-forward.png';
import pause from '../images/play.png';
import circle from '../images/replay.png';
import logolist from '../images/playlist.png';
import logo from '../images/DQBBAtuUEAIcZuL.jpg';
import useAudio from '../hooks/useAudio';
import MusicList from './music-list';
import ALL_MUSIC from '../utils/musics_functions';

import { GetData, LoadDataList } from '../utils/firebase';




function MainBody() {
    const { userData, setUserData } = useContext(userDataContext);

    // useEffect(() => {
    //     setUserData({userenter: false});
    // }, [])
    // const { useruid, databaseref } = userData;

    // setUserData({ useruid: 'hjdg' })
    // console.log(databaseref)

    // const [auth, setAuth] = useState(null);
    // const [database, setDatabase] = useState(null);

    // useEffect(() => {
    //     // Initialize Firebase
    //     firebase.initializeApp(firebaseConfig);

    //     setAuth(firebase.auth());
    //     setDatabase(firebase.database())
    // }, []);

    // const [Artist, setArtist] = useState(null);
    // const [Musicname, setMusicname] = useState(null);
    // const [Musicsource, setMusicsorce] = useState(null);
    const [musicIdx, setMusicIdx] = useState(0);


    // const audioEl = useRef(null)
    // const [isPlaying, setIsPlaying] = useState(false);
    const [musicData, setMusicData] = useState(null);

    const [_shouldSwitch, shouldSwitch] = useState(false);
    useEffect(() => {
        if (_shouldSwitch) {
            shouldSwitch(false);
            handlePlayPause()
        }
    }, [_shouldSwitch])

    // let musicAudio = document.querySelector("#main-audio")

    // let audio= new Audio(ALL_MUSIC[indexs-1].src);

    // useEffect(() => {
    //     // audio.load();
    //     if (isplay) {


    //     }
    //     else {
    //     }
    // });


    {/* <audio id="main-audio" src={ALL_MUSIC[musicIndex-1].src}></audio> */ }

    const handlePlayPause = () => {

        toggle()

        // PlayPause();
        // setisplay(!isplay);
    }

    const handleNext = (flag, cycle) => {
        // const t = Next();
        // setindexs(t);
        // setisplay(true);
        // console.log(ALL_MUSIC[indexs-1].src)
        // let k=ALL_MUSIC[indexs-1];
        // console.log(k, indexs);
        // setsource(ALL_MUSIC[indexs-1].src)
        // if (playing)
        //     toggle()
        // console.log(musicIdx, "preset");


        let index = musicIdx;

        console.log('shouldCycle', cycle)

        if (!flag || (flag && !cycle)) {
            // console.log(musicIdx, "afterset");
            console.log(!flag)
            console.log(flag && !cycle)
            if (musicIdx == ALL_MUSIC.length - 1) {
                index = 0;
            }
            else {
                index = musicIdx + 1;
            }
            let found = true;

            while (found) {
                for (let i = 0; i < compositionsindex.length; i++) {
                    if (compositionsindex[i] - 1 == index) {
                        found = false;
                        setMusicIdx(index);
                    }
                }
                if (found) {
                    if (index == ALL_MUSIC.length - 1) {
                        index = 0;
                    }
                    else {
                        index++;
                    }
                }
            }
        }

        console.log('next index', index);
        // console.log('currPlaying', currPlaying);

        if (flag) {
            console.log('flag')
            const playingCopy = playing
            toggle()
            playAfterSet(true)
            if (!cycle)
                setUrl(ALL_MUSIC[index].url)
            setTimeout(() => {
                console.log('in timeout')
                if (playingCopy)
                    shouldSwitch(true);
                handlePlayPause()
            }, 1000)
            return
        }

        if (!playing) {
            setUrl(ALL_MUSIC[index].url)
        } else {
            toggle()
            playAfterSet(true)
            setUrl(ALL_MUSIC[index].url)
        }
    }

    const handlePrev = () => {
        // const t = Prev();
        // setindexs(t);
        // setisplay(true);
        // setsource(ALL_MUSIC[t-1].src)
        // if (playing)
        //     toggle()
        // setMusicIdx(musicIdx == 0 ? ALL_MUSIC.length - 1 : musicIdx - 1);


        let index = musicIdx;
        if (musicIdx == 0) {
            index = ALL_MUSIC.length - 1;
        }
        else {
            index = musicIdx - 1;
        }

        // console.log(musicIdx, "afterset");
        // console.log("prefor")
        let found = true;

        while (found) {
            for (let i = 0; i < compositionsindex.length; i++) {
                if (compositionsindex[i] - 1 == index) {
                    found = false;
                    setMusicIdx(index);
                }
            }
            if (found) {

                if (index == 0) {
                    index = ALL_MUSIC.length - 1;
                }
                else {
                    index--;
                }
            }
        }

        console.log('next index', index);
        console.log('playing', playing);

        if (!playing) {
            setUrl(ALL_MUSIC[index].url)
        } else {
            toggle()
            playAfterSet(true)
            setUrl(ALL_MUSIC[index].url)
        }

    }


    const [playing, toggle, setUrl, playAfterSet, toggleCycle, shouldCycle] = useAudio('', handleNext);

    const [showList, setShowList] = useState(false);

    const [compositionsindex, setCompositionsindex] = useState([1, 2, 3, 4])

    const [liststatus, setliststatus] = useState(false);



    useEffect(() => {
        setMusicData(ALL_MUSIC[musicIdx] || null);
    }, [musicIdx]);

    useEffect(() => {
        setUrl(musicData?.url || '')
        console.log('musicData', musicData);
    }, [musicData]);

    const handlechange = () => {

        if (liststatus == false) {
            GetData().then((result) => {
                let t = JSON.parse(result);
                let k = []
                for (let i = 0; i < t.length; i++) {
                    k.push(t[i].index)
                };
                setCompositionsindex(k);
                setliststatus(true);

            });
        }
        else {
            setliststatus(false);
            setCompositionsindex([1, 2, 3, 4]);
        }
    }

    const handlelike = () => {

        GetData().then((result) => {

            let t = JSON.parse(result);
            let found = false;


            for (let i = 0; i < t.length; i++) {
                // console.log("Equal? ", );
                if (t[i].index == musicIdx + 1) {
                    found = true;
                }
            }


            let k = []
            console.log(found, "found???");
            if (found == false) {
                let p = musicIdx + 1;
                // console.log("p", p)
                t.push({ index: p });
                LoadDataList(t);
            }
            else {
                for (let i = 0; i < t.length; i++) {
                    if (t[i].index - 1 != musicIdx) {
                        k.push({ index: t[i].index });
                    }
                }
                console.log("Loaddatato Delete", k);
                LoadDataList(k);
            }


        });
    }


    // const handleCircle = () => {
    //     Circle()
    // }

    const handleListItemClick = (id) => {

        console.log('clicked with id', id)
        const newIdx = ALL_MUSIC.findIndex((data) => data.id == id)
        if (newIdx != -1) {
            console.log('newIdx', newIdx)
            setShowList(false);
            setMusicIdx(newIdx)
            if (!playing) {
                playAfterSet(true)
                setUrl(ALL_MUSIC[newIdx].url)
            } else {
                toggle()
                playAfterSet(true)
                setUrl(ALL_MUSIC[newIdx].url)
            }
        }
    };

    useEffect(() => console.log('shouldCycle', shouldCycle), [shouldCycle]);

    return (
        <>
            <div className="top-bar">
                <i id="more-s" className="material-icons" onClick={() => setShowList(true)}>
                    List
                </i>
                {showList &&
                    (
                        <MusicList
                            // listIds={ALL_MUSIC.map((data) => data.id)}
                            listIds={compositionsindex}
                            onClick={handleListItemClick}
                            onClose={() => setShowList(false)}
                        />
                    )
                }


                <span>Now Playing</span>
                <button type="button" id="likedislike" className="listc" onClick={handlelike}>Like</button>
                <button type="button" id="changelist" className="listc" onClick={handlechange}>Choose user list</button>
            </div>
            <div className="img-area">
                <img src={logo} alt="" />
            </div>
            <div className="song-details">
                {/* <p className="name" id="nameuser">{userName || 'Current user'}</p> */}
                <p className="name">{musicData?.name || 'Not defined'}</p>
                <p className="artist">{musicData?.artist || 'Not defined'}</p>
            </div>
            <div className="controlss">

                <button type="button" id="prev" className="material-icons prev musiccontrlole" onClick={handlePrev}>Prev</button>

                <button type="button" id="pause" className="material-icons play musiccontrlole" onClick={handlePlayPause}>Pause</button>

                <button type="button" id="next" className="material-icons next musiccontrlole" onClick={() => handleNext(false, shouldCycle)}>Next</button>

                <button type="button" id="repeat-plist" className="material-icons repeat musiccontrlole" title="Playlist looped" onClick={toggleCycle}>Circle</button>
            </div>
            {/* <audio id="main-audio" src={source} controls autoPlay></audio> */}



        </>
    );
}

export default MainBody;
