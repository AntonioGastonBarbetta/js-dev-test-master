import { Scheduler } from "../index";
var assert = require("assert")


 
describe('Scheduler', function(){
  

        it('there’s room to schedule at time', function () {

            let Check = new Scheduler;

            assert.equal(false, Check.CouldScheduleAt(0, 10));
            assert.equal(false, Check.CouldScheduleAt(0, 40));
            assert.equal(true, Check.CouldScheduleAt(1, 46));
            assert.equal(false, Check.CouldScheduleAt(4, 6));
            assert.equal(true, Check.CouldScheduleAt(4, 30));
            assert.equal(true, Check.CouldScheduleAt(5, 20));

        });


        it('successfully scheduled', function () {

            let Check = new Scheduler;

            assert.equal(false, Check.ScheduleAt(0, 10));
            assert.equal(false, Check.ScheduleAt(0, 40));
            assert.equal(true, Check.ScheduleAt(1, 46));
            assert.equal(false, Check.ScheduleAt(4, 6));
            assert.equal(true, Check.ScheduleAt(4, 30));
            assert.equal(true, Check.ScheduleAt(5, 20));

        });


        it('available time to schedule', function () {

            let Check = new Scheduler;

             assert.deepEqual( { Hour: 1, Minute: 50 }, Check.Schedule())

        });


        it('successfully unscheduled', function () {

            let Check = new Scheduler;

             assert.equal(true, Check.UnscheduleAt(1, 25));
             assert.equal(true, Check.UnscheduleAt(4, 5));
             assert.equal(true, Check.UnscheduleAt(0, 10));
             assert.equal(false, Check.UnscheduleAt(20, 3));
             assert.equal(false, Check.UnscheduleAt(15, 1));
             assert.equal(false, Check.UnscheduleAt(18, 18));

        });








});