import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';

/* utilizar rel = 'noreferrer, quando utilizar target ='_blank, por segurança', O rel="noreferrer" impede que a nova página acesse a propriedade window.opener e garante que ela seja executada em um processo separado3. Além disso, ele também impede que o cabeçalho Referer seja enviado para a nova página.*/

export default function Home () {

   return(
       <div>
 
           <div style={{marginTop: '5%'}}>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='/logo-IFPE.png' size='large' />
                           </Grid.Column>
                           <Grid.Column>
                            
                               Bem vindo ao sistema <strong>OxeFood</strong> ! <br/>
                               Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB III. <br/> <br/>
                               Para acessar o código da <strong>API</strong> do sistema, acesse: <a href='https://github.com/robertoalencar/oxefood-api' rel="noreferrer" target='_blank'> https://github.com/robertoalencar/oxefood-api </a> <br/> <br/>
                               Para acessar o código do <strong>Módulo WEB</strong>, acesse: <a href='https://github.com/robertoalencar/oxefood-web' rel="noreferrer" target='_blank'> https://github.com/robertoalencar/oxefood-web </a>

                           </Grid.Column>
                           
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}
