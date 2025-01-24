import { Container } from "react-bootstrap";


function AppleFooter() {
    return(
        <Container fluid className="bg-dark pt-4" >
            <div className="d-flex">
                <p className="text-white">Italia |</p>&nbsp;
                <p className="text-white">English(UK)</p>
            </div>
            <span>Copyright© 2024</span><span>Apple Inc.</span><span>Tutti i diritti riservati.</span>
            <div className="d-flex">
                <p className="text-white">Condizioni dei servizi |</p>&nbsp;
                <p className="text-white">Apple Music e privacy |</p>&nbsp;
                <p className="text-white">Avviso sui cookie |</p>&nbsp;
                <p className="text-white">Supporto |</p>&nbsp;
                <p className="text-white">Feedback </p>
            </div>
        </Container>
    )
}

export default AppleFooter