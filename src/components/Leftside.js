import styled from "styled-components";

const Leftside = ()=>{
    return(
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhtoText>Add a Photo</AddPhtoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src = "/images/widget-icon.svg" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src = "/images/item-icon.svg" />
                        My Item
                    </span>
                </Item>
            </ArtCard>
            <ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg"/>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
            </ArtCard>
            
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div `
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 8px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div `
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-Word;
`;
const CardBackground = styled.div `
    background: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 52px;
    margin: -12px -12px 0;
`;

const Photo = styled.div `
    box-sizing: border-box;
    box-shadow: none;
    background-image: url('/images/photo.svg');
    width : 72px;
    height : 72px;
    background-clip: content-box;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    border: 2px solid white;
    margin: -38px auto 20px;
    border-radius: 50%;
`;

const Link  = styled.div `
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,0.9);
`;

const AddPhtoText = styled.div `
    color: #0a66c2;
    font-size: 12px;
    margin-top: 4px;
    font-weight: 400;
    line-height: 1.33;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    & > a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        padding: 4px 12px;

        &:hover{
        background-color: rgba(0,0,0,0.08);
        }

        div{
            display: flex;
            flex-direction: column;
            text-align: left;

            span{
                font-size: 12px;
                line-height: 1.333;
                &:first-child{
                    color: rgba(0,0,0,0.6);
                }
                &:nth-child(2){
                    color: rgba(0,0,0,1);
                }
            }
        }
    }
    svg{
        color: rgba(0,0,0,1);
    }
`;

const Item = styled.a `
    border-color: rgba(0,0,0,0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;

    span{
        color: rgba(0,0,0,1);
        display: flex;
        align-items: center;

        svg{
            color: rgba(0,0,0,0.6);
        }
    }
    &:hover{
        background-color: rgba(0,0,0,0.08);
    }
`;

const CommunityCard = styled.div `
    padding: 8px 0 0;
    display: flex;
    flex-direction: column;
    text-align: left;

    a{
        padding: 4px 12px 4px 12px;
        color: black;
        font-size: 12px;
        &:hover{
            color: #0a66c2;
        }
        span{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        &:last-child{
            color: rgba(0,0,0,0.6);
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            padding: 12px;

            &:hover{
                background-color: rgba(0,0,0,0.08);
            }
        }
    }
`;
export default Leftside;