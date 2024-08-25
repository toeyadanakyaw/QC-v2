package com.announce.AcknowledgeHub_SpringBoot.controller;

import com.announce.AcknowledgeHub_SpringBoot.entity.Group;
import com.announce.AcknowledgeHub_SpringBoot.entity.User;
import com.announce.AcknowledgeHub_SpringBoot.model.GroupCreationDto;
import com.announce.AcknowledgeHub_SpringBoot.repository.UserRepository;
import com.announce.AcknowledgeHub_SpringBoot.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("api/group")
public class GroupController {

    @Autowired
    GroupService groupService;

//    @Autowired
//    StaffRepository staffRepository;

    @Autowired
    UserRepository userRepository;

    //for staff table
//    @GetMapping("/staff")
//    public List<Staff> getAllStaffs(){
//        return staffRepository.findAll();
//    }
    @GetMapping("/staff")
    public List<User> getAllStaffs(){
        return userRepository.findAll();
    }

    @PostMapping
    public Group createGroup(@RequestBody GroupCreationDto groupCreationDto){
        return groupService.createGroup(groupCreationDto);
    }

    @PostMapping("/{groupId}/add-staff")
    public Group addStaffToGroup(@PathVariable int groupId, @RequestBody List<Integer> staffIds) {
        return groupService.addStaffToGroup(groupId, staffIds);
    }
}
