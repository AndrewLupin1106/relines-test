import UserTable  from './UserTable';
import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';

describe('UserTable', () => {
    it('should remove user from pUserList and add to allUsers', () => {
        const mockUser = {id: 1, name: 'John', level: 1};
        const initialList = [mockUser];
        const [allUsers, setAllUsers] = useState([]);
        const [pUserList, setPUserList] = useState([]);
        const [nUserList, setNUserList] = useState(initialList);
        const [showPModal, setShowPModal] = useState(false);
        const [clickedId, setClickedId] = useState(null);
        
        const handleClickPModalOk = () => {
            const clickedUser = pUserList.filter(user => user.id === clickedId);
            const removeLevelUser = clickedUser.map(({level, ...rest}) => rest);
            const filteredUsers = pUserList.filter(user =>  user.id !== clickedId);
            allUsers.push(...removeLevelUser);
            setPUserList(filteredUsers);
            setShowPModal(false);
        
            console.log('Positive user rewarded.');
          };
        
        // simulate click event
        setClickedId(mockUser.id);
        handleClickPModalOk();
        
        expect(allUsers).toEqual([mockUser]);
        expect(nUserList).toEqual([]);
        expect(showPModal).toEqual(false);
      });

    it('should remove user from nUserList and add to allUsers', () => {
        const mockUser = {id: 1, name: 'John', level: -1};
        const initialList = [mockUser];
        const [allUsers, setAllUsers] = useState([]);
        const [userList, setUserList] = useState([]);
        const [pUserList, setPUserList] = useState([]);
        const [nUserList, setNUserList] = useState(initialList);
        const [showNModal, setShowNModal] = useState(false);
        const [showPModal, setShowPModal] = useState(false);
        const [clickedId, setClickedId] = useState(null);
        
        const handleClickNModalOk = () => {
          const clickedUser = nUserList.filter(user => user.id === clickedId);
          const removeLevelUser = clickedUser.map(({level, ...rest}) => rest);
          const filteredUsers = nUserList.filter(user =>  user.id !== clickedId);
          allUsers.push(...removeLevelUser);
          setNUserList(filteredUsers);
          setShowNModal(false);
        }
        
        // simulate click event
        setClickedId(mockUser.id);
        handleClickNModalOk();
        
        expect(allUsers).toEqual([mockUser]);
        expect(nUserList).toEqual([]);
        expect(showNModal).toEqual(false);
      });
  });