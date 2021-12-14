import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Avatar, Box, CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(2),
        "&:hover": {
          backgroundColor: "#e9e9e9",
        },
      },
    },
  })
);

export const CardTeams = ({ team }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card>
        <CardHeader
          avatar={<Avatar>{team.name.charAt(0)}</Avatar>}
          title={team.name}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        {team?.members.map((member) => (
          <CardContent key={member._id}>
            <span>{member.fullname}</span>
          </CardContent>
        ))}

        <CardActions>
          <Button>Post</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
CardTeams.propTypes = {
  team: PropTypes.array,
};
