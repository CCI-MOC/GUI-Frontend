import React from "react";
import Backbone from "backbone";
import ProjectList from "./ProjectList";
import modals from "modals";
import ProjectListHeader from "../common/ProjectListHeader";


export default React.createClass({
    displayName: "ProjectListView",

    propTypes: {
        projects: React.PropTypes.instanceOf(Backbone.Collection).isRequired
    },

    launchNewProjectModal: function() {
        modals.ProjectModals.create();
    },

    render: function() {
        return (
        <div>
            <ProjectListHeader title={this.props.projects.length + " Projects"}>
            </ProjectListHeader>
            <div className="container">
                <ProjectList projects={this.props.projects} />
            </div>
        </div>
        );
    }
});
