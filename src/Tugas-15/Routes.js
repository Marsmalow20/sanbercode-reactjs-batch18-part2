import React from 'react';
import { Switch, Route } from "react-router";
import DataBuah from '../Tugas-9/DataBuah';
import TblHargaBuah from '../Tugas-10/TblHargaBuah';
import Timer from '../Tugas-11/Timer';
import List from '../Tugas-12/List';
import ListForm from '../Tugas-13/ListForm';
import Buah from '../Tugas-14/Buah';
import logo from './../logo.svg';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <DataBuah/>
                </Route>
                <Route path="/tugas-9">
                    <DataBuah/>
                </Route>
                <Route path="/tugas-10">
                    <TblHargaBuah/>
                </Route>
                <Route path="/tugas-11">
                    <Timer/>
                </Route>
                <Route path="/tugas-12">
                    <List/>
                </Route>
                <Route path="/tugas-13">
                    <ListForm/>
                </Route>
                <Route path="/tugas-14">
                    <Buah/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes