import React from "react";
import { connect } from "react-redux";
import { getLaunches } from "./../actions/actions";

function Launches(props) {
    return (
        <>
            <button className="button" onClick={() => props.dispatch(getLaunches())}>Get Launches</button>
            {props.isLoading && <div><h1>Loading...</h1></div>}
            {props.error && <div>{props.error.message}</div>}
            {props.launches.map(p => (
                <div className="launchCard">
                    <img src={p.links.mission_patch_small}></img>
                    <h1>{p.mission_name}</h1>
                    <h3>Launch Year: {p.launch_year}</h3>
                    <h3>Rocket Name: {p.rocket.rocket_name}</h3>
                    <h3>Rocket Type: {p.rocket.rocket_type}</h3>
                    <h3>Launch Site: {p.launch_site.site_name}</h3>
                    <h3>Successful: {p.launch_success}</h3>
                    <h3>Details: {p.deyails}</h3>
                </div>
            ))}
        </>
    );
}

const mapDispatchToProps = {
    // Action Creators go here!
    getLaunches
};

export default connect(state => {
    console.log("mapStateToProps.STATE", state);
    return state;
    return { isLoading: state.isLoading, launches: state.launches };
})(Launches);