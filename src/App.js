import React, { useState, useRef, useEffect, useCallback } from 'react';

// meterial-ui組件
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import {
  CssBaseline,
  Container,
  Typography,
  ButtonBase,
  Fab,
  Paper,
  Button,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core';

import Shuffle from '@material-ui/icons/Shuffle';
import Favorite from '@material-ui/icons/Favorite';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import Hearing from '@material-ui/icons/Hearing';

// classNames組件
import classNames from 'classnames';


const useStyles = makeStyles(theme => ({
  rootBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'rgb(229, 235, 242)',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    margin: '64px',
    backgroundColor: 'rgba(106, 111,135, 0.9)',
    opacity: 0.9,
  },
  table: {
    minWidth: 650,
  },
  paperBox: {
    position: 'absolute',
    display: 'flex',
    flex: 1,
    left: 0,
    top: 0,
    flexDirection: 'column',
    background: 'none',
    borderRadius: 0,
    overflowX: 'auto',
  },
  progressBar: {
    cursor: 'pointer',
    width: '100%',
    position: 'relative',
    height: 10,
  },
  porgressArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  progressNow: {
    position: 'absolute',
    display: 'inline-block',
    height: '100%',
    left: 0,
    background: theme.palette.secondary.main,
  },
}));

// 歌曲集合
const songs = [
  {
    author: 'Author My Way',
    name: 'For_We_Are_Many',
    length: '3:53',
  },
  {
    author: 'Author Jazz_Mango',
    name: 'Jazz_Mango',
    length: '2:12',
  },
  {
    author: 'Author Song_of_Mirrors',
    name: 'Song_of_Mirrors',
    length: '6:13',
  },
  {
    author: 'Author Ice_Cream',
    name: 'Ice_Cream',
    length: '2:03',
  },
  {
    author: 'Author Dawn_of_Man',
    name: 'Dawn_of_Man',
    length: '2:06',
  },
];

const App = () => {

  // 變數宣告 - hooks
  const [open, setStateOpen] = useState(true); // 彈窗是否開啟
  const [songIndex, setStateIndex] = useState(0); // 當前歌曲
  const [completed, setCompleted] = useState(0); // 進度條
  const [isFavorite, setIsFavorite] = useState(false) // 設置我的最愛
  const [isPlay, setIsPlay] = useState(false); // 設置啟動
  const [isRandom, setIsRandom] = useState(false); // 設置隨機
  const [currentTime, setCurrentTime] = useState(0); // 設置當前時間
  const [leftTime, setLeftTime] = useState(0); // 設置以進行時間
  const [isMute, setIsMute] = useState(false); // 靜音

  // 找到DOM指定元素 - ref
  const audioRef = useRef(null); //找到當前audio元素
  const progressRef = useRef(null); // 找到當前進度條元素

  // meterial-ui 的樣式變數
  const classes = useStyles();

  // 移動時間條
  const moveProgress = (event) => {
    const fullWidth = progressRef.current.clientWidth;
    const percent = ((event.clientX - 72) / fullWidth * 100).toFixed(2);
    const { duration } = audioRef.current;
    audioRef.current.currentTime = duration * percent / 100;
    setCompleted(percent);
  }

  // 關閉彈窗
  function handleClose() {
    setStateOpen(false);
  }

  // 每當畫面重新render時
  useEffect((isDrag) => {
    progressRef.current.onmousemove = (event) => {
      if (isDrag) moveProgress(event);
    }

    progressRef.current.onmousedown = (event) => {
      isDrag = true;
    }
  },[clickNext,isDrag]);


  // 解構歌曲
  const { name, author } = songs[songIndex];

  return (
    <Box className={classes.rootBox}>
      <CssBaseline />
      {/*  列表  */}
      <Container className={classes.container}>
        <Box className={classes.paperBox}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="center">標題</TableCell>
                <TableCell align="right">長度</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {songs.map((items, index) => {
                return (
                  <TableRow key={items.name}>
                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                    <TableCell component="th">
                      {songIndex === index && <Hearing color="primary" fontSize="small" />}
                    </TableCell>
                    <TableCell component="th" scope="column">
                      <ButtonBase onClick={() => setStateIndex(index)}>
                        <Typography variant="subtitle1" color="primary">
                          {items.name}
                        </Typography>
                      </ButtonBase>
                    </TableCell>
                    <TableCell align="right">{items.length}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>

        {/*  底部進度條 + 控制器  */}
        <Box className={classes.porgressArea}>
          <Box>
            <audio
              autoPlay
              ref={audioRef}
              muted={isMute}
              src={`./music/${name}.mp3`}>
            </audio>
          </Box>
          <Box className={classes.progressBar} ref={progressRef} onClick={moveProgress}>
            <Box className={classes.progressNow} style={{ width: `${completed}%` }} />
          </Box>
        </Box>
      </Container>


      {/* 以下為彈窗元件*/}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">提醒</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            這只是參加六角學院的活動,並無任何商業用途
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            不同意
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
            同意
          </Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
}

export default App;