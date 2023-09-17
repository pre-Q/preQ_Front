import React from "react";
import styled from "styled-components";

const TailModal = (props) => {
    const { open, close } = props;

    return (
        <Container>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main>{props.children}</main>
                    </section>
                ) : null}
            </div>
        </Container>
    );
};

export default TailModal;

const Container = styled.div`
.modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: rgba(0, 0, 0, 0.6);
}
.modal button {
    outline: none;
    cursor: pointer;
    border: 0;
}
.modal > section {
    min-width: 800px;
    // max-width: 450px;
    margin: 0 auto;
    border-radius: 0.8rem;
    background-color: #transparent;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
}
.modal > section > header {
    position: relative;
    height: 10px;
    padding: 16px 64px 16px 16px;
    background-color: transparent;
    font-weight: 700;
}
.modal > section > header button {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    background-color: transparent;
}
.modal > section > main {
    padding: 30px 10px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    background-color: #fff;
    border-radius: 0.8rem;
}
.modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
}
@keyframes modal-show {
    from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
}
@keyframes modal-bg-show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`