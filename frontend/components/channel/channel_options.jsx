import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { createChannel } from "../../actions/channel_actions";

export default function ChannelOptions(props) {
    const [channelName, setChannelName] = useState("");
    const dispatch = useDispatch();

    function handleNameChange(e) {
        setChannelName(e.target.value);
    }

    function newChannel() {
        console.log(channelName);
        console.log(props);
        dispatch(createChannel({
            title: channelName,
            server_id: Number(props.serverId)
        }));
        // props.createChannel({
        //     title: channelName,
        //     server_id: Number(props.serverId)
        // });
    }

    return(
        <div className="channelModal">
            <p>New Channel Name:</p>
            <input 
                className="channelNameInputField defaultInput" 
                type="text"
                onChange={handleNameChange}
            />
            <button
                className="createChannelButton button"
                onClick={newChannel}
                >
                Create Channel
            </button>
        </div>
    ); 
};