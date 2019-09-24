import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}

	toggleCategories() {
	
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
					{/* Project 1*/}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: 'black',heigth: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAPF8vrQ6xvb0zExOUS00ZB_KFeIi2UiC5ZkWvWzveIO0wATsQ) center / cover'}}> 
							React Project #1
						</CardTitle>
						<CardText>
							O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>

						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 2*/}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: 'black',heigth: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAPF8vrQ6xvb0zExOUS00ZB_KFeIi2UiC5ZkWvWzveIO0wATsQ) center / cover'}}> 
							React Project #2
						</CardTitle>
						<CardText>
							O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>

						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 3*/}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: 'black',heigth: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAPF8vrQ6xvb0zExOUS00ZB_KFeIi2UiC5ZkWvWzveIO0wATsQ) center / cover'}}> 
							React Project #3
						</CardTitle>
						<CardText>
							O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>

						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
				
			)
		} else if(this.state.activeTab === 1){
			return(
				<div> <h1> This is Angular</h1> </div>
			)
		} else if(this.state.activeTab === 2){
			return(
				<div> <h1> This is VueJS</h1> </div>
			)
		} else if(this.state.activeTab === 3){
			return(
				<div> <h1> This is MongoDB</h1> </div>
			)
		}

	}

	render(){
		return (
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab> React </Tab>
					<Tab> Angular </Tab>
					<Tab> VueJs </Tab>
					<Tab> MongoDB </Tab>
				</Tabs>

				<Grid>
					<div className="content"> {this.toggleCategories()} </div>
				</Grid>
					
			</div>
		)
	}
}

export default Projects;