import React, {useState} from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useDispatch} from "react-redux";
import {setUserTC} from "../../state/userReducer";
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        color: '#aaa8ab',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 1),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'black',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '40ch',
            },
        },
    }));

    const [state, setState] = useState<string>('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEnterClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(setUserTC(state))
            setState('')
            navigate(`profile/${state}`)
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setState(event.target.value)
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <GitHubIcon fontSize={'large'}/>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={state}
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            onChange={handleSearchChange}
                            onKeyPress={handleEnterClick}
                            autoFocus
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}