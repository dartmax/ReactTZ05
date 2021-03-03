import React, {Fragment, useState} from 'react';
import './styles/style.css'
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import {CardActions, Grid} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

function listToAvatar(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    margin: theme.spacing(10),
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    display: 'flex',
    flexWrap: 'wrap',
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
}));

const AutocompleteComponent = ({
  list,
}) => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();
  const [value, setValue] = useState('');
  let [selectedList, setSelectedList] = useState([]);


  const addToFavorites = () => {
    if(value){
      setSelectedList(selectedList = [
        {
          id: value.id,
          name: value.name,
          avatar: value.avatar,
          author: {
            avatar: value.author.avatar,
            firstName: value.author.firstName,
            lastName: value.author.lastName,
          },
        }]
      )
    }
  };

  const removeFromFavorites = (id) => {
    return setSelectedList([...selectedList.filter((newList) => newList.id !== id)])
  };

  const onSubmit = (event, value) => {
    return addToFavorites(value)
  };

  return (
    <div className={classes.root}>
      <Paper container spacing={4}>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Grid>
            <Autocomplete
              id="list-select-demo"
              style={{width: 300}}
              options={list}
              control={control}
              onInputChange={(event, newInputValue) => {
                setValue(newInputValue);
              }}
              classes={{
                option: classes.option,
              }}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(option) => (
                <Fragment>
                  <Avatar>{listToAvatar(option.avatar)}</Avatar>
                  {option.name} <Avatar>{listToAvatar(option.author.avatar)}</Avatar> {option.author.firstName} {option.author.lastName}
                </Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{width: '350px'}}
                  label="Choose a article"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-article',
                  }}
                />
              )}
            />
          </Grid>
          <CardActions>
              <Button color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </CardActions>
        </form>
      </Paper>
      <div>My favorite:</div>
      {selectedList.map((items, index) => {
        return (
          <Paper key={index} className="item-list">
            <div className={"item-text"}>
              <div>
                <Avatar>{listToAvatar(items.avatar)}</Avatar>
                {items.name} <Avatar>{listToAvatar(items.author.avatar)}</Avatar> {items.author.firstName} {items.author.lastName}
              </div>
            </div>
            <div className="item-delete" onClick={() => removeFromFavorites(items.id)}>
              X
            </div>
          </Paper>
        )
      })}
    </div>
  );
};

export default AutocompleteComponent;