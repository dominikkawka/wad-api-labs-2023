import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select, MenuItem, InputLabel } from "@mui/material";

import ListItemIcon from '@mui/material/ListItemIcon';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const AddTaskForm = (props) => {

  return (
    <Box
    component="form"
    sx={{'& .MuiOutlinedInput-root': { m: 1, width: '30ch' },}}
    onSubmit={props.submit}>
    <div>
      <TextField required id="outlined-required" name="title" label="Task Title" 
      InputLabelProps={{ shrink: true }} onChange={(event) => props.change(event)} />
    </div>
    <div>
      <TextField required name="deadline" label="Deadline" InputLabelProps={{ shrink: true }} type="date" 
      onChange={(event) => props.change(event)} />
    </div>
    <div>
      <TextField name="description" id="outlined-multiline-static" label="Task Details"
        InputLabelProps={{ shrink: true }} multiline rows={4} onChange={(event) => props.change(event)} />
    </div>
    <div>
          <InputLabel id="demo-select-small-label">Select Priority</InputLabel>
            <Select
                name="priority"
                labelId="priority"
                id="selectPriority"
                value={props.priority}
                label="priority"
                onChange={(event) => props.change(event)}>
                <MenuItem value="low">
                  <ListItemIcon>
                    <LowPriorityIcon />
                  </ListItemIcon>
                  Low</MenuItem>
                <MenuItem value="medium">
                  <ListItemIcon>
                    <AlarmAddIcon />
                  </ListItemIcon>
                  Medium</MenuItem>
                <MenuItem value="high">
                  <ListItemIcon>
                    <PriorityHighIcon />
                  </ListItemIcon>
                  High</MenuItem>
            </Select>

    </div>
    <div>
      <Button type="submit" variant="contained"
        color="primary"
        sx={{m: 1, p: 1, width: '95%' }}>
        Add Task
      </Button>
    </div>
  </Box>
  )
};

export default AddTaskForm;