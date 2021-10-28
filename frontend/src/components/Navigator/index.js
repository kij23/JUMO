import React, {useEffect, useState} from "react";
import { useRecoilValue } from "recoil";
import LinkTo from "../../hooks/useLink";
import { userAtom } from "../../store/user";
import { Header, Logo, Menu, MenuAnchor, MenuDetail, SubMenu, Empty } from "./style";

export default function Navigator({history}) {
    const userInfo = useRecoilValue(userAtom);

    const unLoginedMenu = [
        { name: "로그인", href: "/login" },
        { name: "회원가입", href: "/signup" },
    ];
    const LoginedMenu = [
        { name: "내정보", href: "/userinfo" },
        { name: "로그아웃", href: "/logout" },
    ];
    const [menuList, setMenuList] = useState(LoginedMenu);
    
    useEffect(() => {
        if (userInfo.userId === undefined)
            setMenuList(unLoginedMenu);
        else
            setMenuList(LoginedMenu);
    }, [])

    return (
        <>
            <Header>
                <Logo onClick={(e) => LinkTo(e, history, "/")}/>
                <SubMenu>
                    <Menu>
                        {
                            menuList.map((menu,index) => {
                                const name = menu.name;
                                const href = menu.href;
                                return (
                                    <MenuDetail key={index}>
                                        <MenuAnchor  onClick={(e) => LinkTo(e, history, href)}>
                                            {name}
                                        </MenuAnchor>
                                    </MenuDetail>
                                );
                            })
                        }
                    </Menu>
                </SubMenu>
            </Header>
            <Empty/>
        </>
    )
}