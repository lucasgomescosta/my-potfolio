import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render(){
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img 
								src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
								alt="avatar"
								style={{heigth: '200px'}}
								/>
						</div>

						<h2 style={{paddingTop: '2em'}}> Lucas Gomes</h2>
						<h4 style={{color: 'grey'}}>Programador </h4>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

						<p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. </p>

						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
						<h5> Adress</h5>
						<p></p>
						<h5> Phone </h5>
						<p> (95) 99141-5513</p>
						<h5> Email </h5>
						<p>mainlucas@gmail.com</p>
						<h5> Web </h5>
						<p> example.com</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

					</Cell>

					<Cell className="resume-rigth-col" col={8}> 
						<h2> Education </h2>
						<Education 
							startYear={2012}
							endYear={2019}
							schoolName="Universidade Federal de Roraima"
							schoolDescription="O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro."
						/>
						
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2> Experience </h2>

						<Experience
						 startYear={2000}
						 endYear={2001}
						 jobName="First Job"
						 jobDescription="O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão."
						 />
						<hr style={{borderTop: '3px solid #e22947'}}/>
					
						<Skills 
							skill="Javascript"
							progress={50}
						/>
						<Skills 
							skill="HTML/CSS"
							progress={60}
						/>
						<Skills 
							skill="NodeJS"
							progress={40}
						/>
						<Skills 
							skill="React"
							progress={10}
						/>
						

					</Cell>
				</Grid>

			</div>
		)
	}
}

export default Resume;